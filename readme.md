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
* Task Input Validation
* "Card" for Tomorrows
* fix OB1 error in history calculation
* store/generate new tasks
  * Should be able to update
    * Pace
    * End Date
    * Goal
* https://www.npmjs.com/package/react-swipeable-list 
 for multilist swipe actions

Tasks view
  should only include goals for today that have < pace
	Sorted by things with Activity Left for today


### Expo Emoticons
    icon directory
    https://icons.expo.fyi/

    plus minus
    plus-circle-multiple

## Gestures
### onSwipeRight

  Should check tasks history @ todays index, add remaining pace count. 
  
  This should take into account the total already done for today
  
### onLongSwipeRight
  Edit, should bring up number entry. 
  Add to history which changes Remaining for today

### onSwipeLeft
  Should update Pace
  
    Math.ceil(remaining total / remaining days)

### onLongSwipeLeft
  Update End Date
  
  Update Count
   
    AutoFill with current Pace * remaining + Completed
    Minimum ∑ completed 
    Should update Pace


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