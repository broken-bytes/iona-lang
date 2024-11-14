(function (Prism) {

    function literal(str) {
        return function () { return str; };
    }

    // Keyword patterns 
    var keyword = /\b(?:async|await|break|continue|case|catch|continue|defer|else|enum|fn|for|if|inline|let|next|none|private|public|return|struct|try|union|var|val|when|while|contract|module|mut)\b/; // Add new Iona keywords


    // Identifier pattern
    var IDENTIFIER = '\\b(?!' + keyword.source + ')(?!\\d)\\w+\\b';

    var ALIGN = /align\s*\((?:[^()]|\([^()]*\))*\)/.source;
    var PREFIX_TYPE_OP = /(?:\?|\bpromise->|(?:\[[^[\]]*\]|\*(?!\*)|\*\*)(?:\s*<ALIGN>|\s*const\b|\s*volatile\b|\s*allowzero\b)*)/.source.replace(/<ALIGN>/g, literal(ALIGN));
    var SUFFIX_EXPR = /(?:\bpromise\b|(?:\berror\.)?<ID>(?:\.<ID>)*(?!\s+<ID>))/.source.replace(/<ID>/g, literal(IDENTIFIER));
    var TYPE = '(?!\\s)(?:!?\\s*(?:' + PREFIX_TYPE_OP + '\\s*)*' + SUFFIX_EXPR + ')+';

    // Prism language definition
    Prism.languages.Iona = {
        'comment': [
            { // Doc-style comments
                pattern: /\/\/[/!].*/,
                alias: 'doc-comment'
            },
            /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/ // Single-line and multi-line comments
        ],
        'string': [
            {
                pattern: /(^|[^\\@])c?"(?:[^"\\\r\n]|\\.)*"/,
                lookbehind: true,
                greedy: true
            }
            // (Remove the multiline string pattern - it doesn't seem to be part of Iona)
        ],
        'char': {
            pattern: /(^|[^\\])'(?:[^'\\\r\n]|[\uD800-\uDFFF]{2}|\\(?:.|x[a-fA-F\d]{2}|u\{[a-fA-F\d]{1,6}\}))'/,
            lookbehind: true,
            greedy: true
        },
        'builtin': /\B@(?!\d)\w+(?=\s*\()/, // Built-in attributes
        'label': {
            pattern: /(\b(?:break|continue)\s*:\s*)\w+\b|\b(?!\d)\w+\b(?=\s*:\s*(?:\{|while\b))/,
            lookbehind: true
        },
        'class-name': [
            // ... (Keep class-name patterns from the original example) ...
        ],
        'builtin-type': {
            pattern: /\b(?:Int)\b/, // Add Iona-specific built-in types
            alias: 'keyword' 
        },
        'keyword': keyword,
        'function': /\b(?!\d)\w+(?=\s*\()/, // Function names
        'number': /\b(?:0[xX][a-fA-F0-9]+|\d+(?:\.\d*)?)\b/, // Hexadecimal and decimal numbers
        'boolean': /\b(?:false|true)\b/,
        'operator': /[-+*/%=&|^]=?|[!?:~]|<[<=]?|>[>=]?/,
        'punctuation': /[.,;(){}\[\]]/
    };


    Prism.languages.Iona['class-name'].forEach(function (obj) {
        if (obj.inside === null) {
            obj.inside = Prism.languages.Iona;
        }
    });

}(Prism));
