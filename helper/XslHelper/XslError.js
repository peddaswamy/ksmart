class XslError extends Error{
	constructor(codeNum,codeStr,message){
		super(message);
		this.codeNum=codeNum;
		this.codeStr=codeStr;
	}
}
module.exports=exports=XslError;