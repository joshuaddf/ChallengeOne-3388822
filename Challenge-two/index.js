class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
        this.word = null;
        this.topThree = [];
    }
}

class SearchSuggestionSystem {
    constructor(products) {
        this.root = new TrieNode();
        for (let product of products) {
            this.insert(product);
        }
        this.computeTopThree(this.root);
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
        node.word = word;
    }

    computeTopThree(node) {
        let words = [];
        if (node.isEndOfWord) {
            words.push(node.word);
        }
        for (let key of Object.keys(node.children).sort()) {
            let child = node.children[key];
            this.computeTopThree(child);
            words.push(...child.topThree);
        }
        node.topThree = words.slice(0, 3);
    }

    getSuggestions(searchWord) {
        let result = [];
        let node = this.root;
        for (let char of searchWord) {
            if (node && node.children[char]) {
                node = node.children[char];
                result.push(node.topThree);
            } else {
                node = null;
                result.push([]);
            }
        }
        return result;
    }
}
