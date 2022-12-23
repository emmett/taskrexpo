import moment from 'moment'
let start = moment('2022-12-01')
let end = moment('2023-12-31')

let count = end.diff(start, 'days')
let data = {}
let temp = start
for (var i = 0; i <= count; i++){
  let date = new Date(start + i * 1000 * 60 * 60 * 24).toISOString().split('T')[0]
  data[date] = {
    count: date < new Date().toISOString().split('T')[0]? Math.ceil(Math.random() * 55) : 0,
    goal: 55
  }
}
export const Data = [
  {
    "Task": "Pushups",
    "Goal": 20000,
    "History": data, 
    "Start": start,
    "End": end
  },  
  {
    "Task": "Situps",
    "Goal": 20000,
    "History": data, 
    "Start": start,
    "End": end 
  },
]