let n = 3, trust = [[1,3],[2,3],[3,1]]

var findJudge = function(n, trust) {
    let memo = {}
    for (let i = 0; i < trust.length; i++){
        let one = trust[i][0]
        let two = trust[i][1]
        if (memo[one]) memo[one]++;
        if (memo[two]) memo[two]++;
        if (!memo[one]) memo[one] = 0;
        if (!memo[two]) memo[two] = 0;
    }
    return memo

};

console.log(findJudge(n, trust));
