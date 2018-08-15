import React, { Component } from 'react';

class Form extends Component {
    //lay du lieu input
    constructor(props) {
        super(props);
        this.state={
            txtUserName:'',
            txtPassWord:'',
            sltRander:0,
            rdA:'a',
            rsB:'b',
            chkbStatus:false
        }
    }
    onHandleChange=(event)=>{
        var target=event.target;
        var name = target.name;
        var value= target.type==='checkbox' ? target.checked : target.value;
        this.setState({
           [name]:value
        })
    }
    onHandleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
            <div>
                 <form onSubmit= {this.onHandleSubmit} >
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" id="txtUserName"  name="txtUserName" placeholder="Enter UserName" onChange={this.onHandleChange }/>                       
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="txtPassWord" name="txtPassWord" placeholder="Password" onChange={this.onHandleChange }/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    
                    <select name="sltRander" className="form-control" required="required" onChange={this.onHandleChange } value={this.state.sltRander}>
                        <option value={0}>Male</option>
                        <option value={1}>Female</option>
                    </select>
                    
                    
                    <div className="radio">
                        <label>
                            <input type="radio" name="rdA" value="a" onChange={this.onHandleChange } checked={this.state.rdA==='a'}/>
                           Choose A
                        </label><br/>
                        <label>
                            <input type="radio" name="rdB"  value="b" onChange={this.onHandleChange } checked={this.state.rdB==='b'}/>
                            Choose B
                        </label>
                    </div>

                    
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value={true} name="chkbStatus" onChange={this.onHandleChange } checked={this.state.chkbStatus===true}/>
                            Trang Thai
                        </label>
                    </div>
                    
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-danger">Reset</button>
                </form>
            </div>
        );
    }
}
export default Form;