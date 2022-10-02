
export const setMessageClass = (messageUID, userUID) =>{
	if(messageUID === userUID){
		return 'user'
	}
	else{
		return ''
	}
}