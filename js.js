function Search() {
    this.array = ["0923122882", "0384739483", "0843824347", "0728393493"];
    this.arrayViettell = [];
    this.searchNumberPhone = function () {
        regex = /^((09|03)+([0-9]{8})\b)$/;
        for (let i = 0; i < this.array.length; i++) {
            if (regex.test(this.array[i])) {
                this.arrayViettell.push(this.array[i]);
            }
        }
        return this.arrayViettell;
    };
    this.display=function () {
        alert("Viettell: "+this.arrayViettell.join(","));
    }
}
let search= new Search();
search.searchNumberPhone();
search.display();