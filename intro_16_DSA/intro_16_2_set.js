/* Sets */

class mySet {
    // the var collection will hold the set
    collection = [];
    // this method will check for the presence of an element and return true or false
    has (element) {
        return (this.collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    values () {
        return this.collection;
    };
    // this method will add an element to the set
    add (element) {
        if(!this.has(element)){
            this.collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    remove (element) {
        if(this.has(element)){
            index = this.collection.indexOf(element);
            this.collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
   size () {
        return this.collection.length;
    };
    // this method will return the union of two sets
    union (otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    intersection (otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    // this method will return the difference of two sets as a new set
    difference (otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    // this method will test if the set is a subset of a different set
    subset (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value) {
          return otherSet.has(value);
        });
    };
}
var setA = new mySet();  
var setB = new mySet();  
setA.add("a");  
setB.add("b");  
setB.add("c");  
setB.add("a");  
setB.add("d");  
console.log(setA.collection);
console.log(setB.collection);
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new Set();  
var setD = new Set();  
setC.add("a");  
setD.add("b");  
setD.add("c");  
setD.add("a");  
setD.add("d");  
console.log(setD.values())
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
