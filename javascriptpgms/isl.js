isl=[
    {name:"mumbaicity",mp:7,win:5,draw:1,lost:1,gf:11,ga:3,pts:16},
    {name:"mohan bugan",mp:7,win:5,draw:1,lost:1,gf:8,ga:3,pts:16},
    {name:"bengalurufc",mp:7,win:3,draw:3,lost:1,gf:11,ga:8,pts:12},
    {name:"northeastfc",mp:7,win:2,draw:4,lost:1,gf:8,ga:6,pts:10},
    {name:"jamshedpoor",mp:7,win:2,draw:4,lost:1,gf:8,ga:7,pts:10},
    {name:"hydrabadfc",mp:6,win:2,draw:2,lost:1,gf:6,ga:6,pts:9},
    {name:"goafc",mp:7,win:2,draw:2,lost:3,gf:8,ga:8,pts:8}
]


//print all team names only

// isl.forEach(element => {console.log(element.name)
    
// });
// var arr=isl.map(names=>names.name).forEach(element => {console.log(element)
    
// });


//=>print all team names in upper case
// var arr=isl.map(upper=>upper.name.toUpperCase()).forEach(element => {
//     console.log(element)
// });


//print teams whose win >=3
// isl.filter(wins=>wins.win>=3).forEach(element => {
//     console.log(element.name,element.win)
// });

//=>print team who played most no of matches

// var arr=isl.map(match=>match.mp).reduce((team1,team2)=>(team1>team2?team1:team2))

// isl.filter(names=>names.mp==arr).forEach(element => {console.log("team name "+element.name,"mp "+element.mp)
    
// });

//=>print team name with highest point

var arr=isl.map(t1=>t1.pts).reduce((t1,t2)=>(t1>t2?t1:t2))
//console.log(arr)
isl.filter(team1=>team1.pts==arr).forEach(element => {
    console.log(element.name)
});


