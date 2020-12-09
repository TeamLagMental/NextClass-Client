const calendar = [
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours())),
    end: new Date(new Date().setHours(new Date().getHours()))
  },{
    id: 12,
    title: 'Mi cumple :D',
    start: new Date(2021, 1, 15, 0, 0, 0),
    end: new Date(2021, 1, 16, 0, 0, 0)
  }
]

export default calendar