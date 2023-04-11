export const setMessageClass = (messageUID, userUID) =>{
	if(messageUID === userUID){
		return 'user'
	}
	else{
		return ''
	}
}

export const uniqueValuesInArray = (value, index, selfValue) =>{
	return selfValue.indexOf(value) === index;
}