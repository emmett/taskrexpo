import moment from 'moment'
let start = moment('2022-12-01')
let end = moment('2023-12-31')

let count = end.diff(start, 'days')
let data = {}
for (var i = 0; i <= count; i++){
  let date = start.add(count, 'days').format('YYYY-MM-DD')
  data[date] = {
    count: Math.ceil(Math.random() * 55),
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