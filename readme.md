# Set up Expo
https://reactnative.dev/docs/environment-setup

* npm install --global expo-cli
* npx expo install react-native-web@~0.18.9 
* npx expo install react-dom@18.1.0
* npx expo install @expo/webpack-config@^0.17.2

# Install Dependencies
* npm i

# Open simulator
* open -a simulator

# Run Environment
* npm run ios

## TODO / Musings

* fix the props handoff > item.item/task.item is awkward af and my bad coding practice
* Default of No Tasks Left
* "Card" for Tomorrows
* store/generate new tasks
  * Default is 365 days from today
  * Tasks will create an object of goal dates
      
      ```
      {
        2022-12-01: {
          goal: 55,
          completed: 0
        },
        2022-12-02: {
          goal: 55,
          completed: 0
        }
        ...
      }
      ```
    This will allow for computing and updating the goal after for a given date.
  * Should be able to update
    * Pace
    * End Date
    * Goal
* Update dummy data generator for more realistic data
* update started date bug for Moment
* https://www.npmjs.com/package/react-swipeable-list 
 for multilist swipe actions

Tasks view
  should only include goals for today that have < pace
	Sorted by things with Activity Left for today


### Expo Task Icons
    icon directory
    https://icons.expo.fyi/

    plus minus
    plus-circle-multiple

### onSwipeRight
  check for pace
	Should check goal.Id for history @ todays index, add pace count. 
  
  This should take into account the total already done for today

### onSwipeLeft
  Edit, should bring up number entry. 
  
  Add to history which changes Left for today

### checkHistory 
  Allow for editing of previous days
  Card with SwipeLeft/SwipeRight for each date

## Ideas
  Multiple swipe options for various defaults


  Reporting/Pace updates
  * Update pace constantly?
  * Update pace in task?
  * Extrapolate total based on current

### React Native stuff
  Whats the right way to break this out into proper components?