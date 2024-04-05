
const TODO = 0
const DOING = 1
const DONE = 2

// filter, map, reduce
const list = [
  {
    name: "luo todo javascript esimerkki",
    status: TODO
  },
  {
    name: "luo filter",
    status: TODO,
    assigned: "juha"
  },
  {
    name: "luo map",
    status: DOING
  },
  {
    name: "listaa doing statuksella olevat tiketit",
    status: DOING,
    assigned: "simo"
  },
  {
    name: "luo array",
    status: DONE,
    assigned: "juha"
  },
]

console.log("list", list)

const tasksDone = list.filter(({status}) => status === DONE)
const tasksDoing = list.filter(({status}) => status === DOING)
const tasksTodo = list.filter(({status}) => status === TODO)
const tasksJuha = list.filter(({assigned}) => assigned === "juha")
const tasksJuhaTodo = list.filter(({assigned, status}) =>
  status === TODO && assigned === "juha"
)
const tasksSimo = list.filter(({assigned}) => assigned === "simo")

console.log("done", tasksDone)
console.log("doing", tasksDoing)
console.log("todo", tasksTodo)
console.log("juhan taskit", tasksJuha)
console.log("juhan taskit todo tilassa", tasksJuhaTodo)
console.log("simon taskit", tasksSimo)
console.log("list", list)


const juhanPuhdistetutTodo = tasksJuhaTodo.map((task) => ({
  status: task.status,
  name: task.name.toUpperCase(),
  cleaned: true
}))

console.log("juhanPuhdistetutTodo", juhanPuhdistetutTodo)

const tietokanta = {
  kutsu: (arvot) => console.log("tietokannan kutsu", arvot)
}

const juhanPuhdistetutTodoForeach = list.forEach((task) => {
  tietokanta.kutsu({
    status: task.status,
    name: task.name.toUpperCase(),
    cleaned: true
  })
})

console.log("juhanPuhdistetutTodoForeach", juhanPuhdistetutTodoForeach)

const kaikkiKirjaimet = list.reduce((a, b) => a + b.name, "")
console.log("kaikkiKirjaimet", kaikkiKirjaimet)

const ages = [12, 234, 52, 5, -1, 9, 0]

const ageSum = ages.reduce((a,b) => {
  console.log("a", a)
  console.log("b", b)
  return a + b}, 0)
console.log("ageSum", ageSum)

