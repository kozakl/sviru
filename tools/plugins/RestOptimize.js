const ConcatSource = require('webpack-core/lib/ConcatSource');
/**
 * @author kozakluke@gmail.com
 */
class RestOptimize
{
    apply(compiler)
    {
        compiler.plugin('compilation', (compilation)=> {
            this.compilation = compilation;
            this.compilation.plugin('optimize-chunk-assets', (chunks, done)=> {
                chunks.forEach(this.processChunk.bind(this));
                done();
            });
        });
    }
    
    processChunk(chunk)
    {
        chunk.files.forEach(this.processFile.bind(this));
    }
    
    processFile(file)
    {
        var source = this.compilation.assets[file].source(),
            middle = source.indexOf('arguments.length;');
        while (middle !=-1)
        {
            const term1 = this.backSearch(source, '{', middle),
                  term2 = this.backSearch(source, '}', middle),
                  begin = this.backSearch(source, '[', middle),
                  end   = source.indexOf('}', middle);
            if (term1 < begin && term2 < begin)
                source = this.remove(source, 'arguments;', begin, end + 1);
            
            middle = source.indexOf('arguments.length;', middle + 1);
        }
        
        this.compilation.assets[file] = new ConcatSource(source);
    }
    
    remove(string, insert, start, end)
    {
        return string.substring(0, start) + insert +
               string.substring(end);
    }
    
    backSearch(string, searchChar, position)
    {
        for (var i = position; i--;) {
            if (string[i] == searchChar)
                return i;
        }
    }
}

module.exports = RestOptimize;
