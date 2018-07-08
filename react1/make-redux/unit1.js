
function createStore(reducer){
	let state = null
	const listeners = []
	const subscribe = (listener) => listeners.push(listener)
	const getState = () => state
	const dispatch = (action) => {
		state = reducer(state, action)
		listeners.forEach((listener)=>listener())
	}
	dispatch({})
	return {getState, dispatch, subscribe}
}

function renderTitle(obj_new, obj_old = {}){
	if(obj_new === obj_old) return
	
	const dom = document.getElementById('title');
	dom.innerHTML = obj_new.text;
	dom.style.color = obj_new.color;

	console.log('render Title')
}
function renderContent(obj_new, obj_old = {}){
	if(obj_new === obj_old) return
	
	const dom = document.getElementById('content');
	dom.innerHTML = obj_new.text;
	dom.style.color = obj_new.color;

	console.log('render Content')
}
function renderApp(obj_new, obj_old = {}){
	if(obj_new === obj_old) return

	renderTitle(obj_new.title, obj_old.title)
	renderContent(obj_new.content, obj_old.content)

	console.log('render App')
}

function stateChanger(state, action){
	if(!state){
		return {
			title: {
				text: 'React.js 小书',
				color: 'red',
			},
			content: {
				text: 'React.js 小书内容',
				color: 'blue'
			}
		}
	}

	switch(action.type){
		case 'UPDATE_TITLE_TEXT':
			return {
				...state,
				title:{
					...state.title,
					text:action.text
				}
			}
			break
		case 'UPDATE_TITLE_COLOR':
			return {
				...state,
				title:{
					...state.title,
					color:action.color
				}
			}
			break
		default:
			break
	}
}

const store = createStore(stateChanger)
let stateOld = store.getState();
store.subscribe(() => {
	var stateNew = store.getState()
	renderApp(stateNew, stateOld)
	stateOld = stateNew
})

//first render
renderApp(store.getState())

// change
store.dispatch({type:'UPDATE_TITLE_COLOR', color:'green'})

store.dispatch({type:'UPDATE_TITLE_TEXT', text:'what is the hill'})