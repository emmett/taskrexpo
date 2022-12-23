## Set up Expo
https://reactnative.dev/docs/environment-setup

* npm install --global expo-cli
* npx expo install react-native-web@~0.18.9 
* npx expo install react-dom@18.1.0
* npx expo install @expo/webpack-config@^0.17.2

## Install Dependencies
* npm i


## Open simulator
* open -a simulator

## Run Environment
* npm run ios

## TODO / Musings

* store/generate new tasks
* Derived stats per task
* #https://www.npmjs.com/package/react-swipeable-list for multilist swipe actions

Tasks view
  should only include goals for today that have < pace
	Sorted by things with Required Activity


Flat List (collapsible?)
	To Do
	History
		If swiped can modify historical days

### Export Task Item
    icon directory
    https://icons.expo.fyi/

    plus minus
    plus-circle-multiple

### onSwipeRight
  check for pace
	Should check goal.Id for history @ todays index, add pace count. This should take into account the total already done for today

### onSwipeLeft
  Edit, should bring up number entry. Add to history which changes Left for today

### checkHistory 
  Allow for editing of previous days

## Ideas
  Multiple swipe options for various 
  Reporting/Pace updates
    Update pace constantly?
    Update pace in task?
    Extrapolate total based on current

### React Native stuff
  Whats the right way to break this out into proper components?