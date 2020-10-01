import React from 'react'
import './data.css'; //mengimport data.css supaya tampilan data.js nya menjadi menarik
class Data extends React.Component{
    constructor(props){ //props adalah model data yang memiliki fungsi ganda yaitu selain untuk menyimpan data juga berfungsi untuk melempar data
        super(props);
        //State adalah “model” data yang berfungsi sebagai data utama pada component yang isi-nya hanya untuk component tempat state itu di set isi-nya.
        this.state={ //deklarasi isi state
          title: 'DATA MAHASISWA INDONESIA',
          act: 0,
          index: '',
          dataa: []
        }
      } 
    
      componentDidMount(){
        this.refs.name.focus();
      }
    //mensubmit ata mengumpulkan data yang sudah diisikan
      Submit = (e) =>{
        e.preventDefault();
        console.log('try');
    
        let dataa = this.state.dataa;
        let name = this.refs.name.value;
        let email = this.refs.email.value;
    
        if(this.state.act === 0){   //new
          let data = {
            name, email
          }
          dataa.push(data);
        }else{                      //update
          let index = this.state.index;
          dataa[index].name = name;
          dataa[index].email = email;
        }    
    
        this.setState({ //untuk mengubah nilai state yang ada.
          dataa: dataa,
          act: 0
        });
    
        this.refs.myForm.reset();
        this.refs.name.focus();
      }
    //edit untuk mengedit data yang telah kita masukkan
      Edit = (i) => {
        let data = this.state.dataa[i];
        this.refs.name.value = data.name;
        this.refs.email.value = data.email;
    
        this.setState({ //untuk mengubah nilai state yang ada.
          act: 1,
          index: i
        });
    
        this.refs.name.focus();
      }  
      //Drop untuk menghapus data yang telah kita masukkan
      Drop = (index) => {  
        // temp digunakan untuk menyimpan sementara  
        // data array  
        let temp = this.state.dataa;  
        
        // menghapus data pada index yang dihapus  
        temp.splice(index,1);  
        
        // array data diupdate dengan nilai data temp  
        this.setState({dataa: temp});  
        }                              

    
      render() {
        let dataa = this.state.dataa;
        return (
          <div className="App">
            <h2>{this.state.title}</h2>
            <form ref="myForm" className="myForm">
              <input type="text" ref="name" placeholder="your name" className="formField" />
              <input type="text" ref="email" placeholder="your email" className="formField" />
              <button onClick={(e)=>this.Submit(e)} className="myButton">submit </button>
            </form>
            <pre>
              {dataa.map((data, i) =>
                <li key={i} className="myList">
                  {i+1}. {data.name}, {data.email}
                  <button onClick={()=>this.Edit(i)} className="myListButton btn-primary">Edit </button>
                  <button onClick={()=>this.Drop(i)} className="myListButton btn-danger">Delete </button>
                </li>
              )}
            </pre>
          </div>
        );
      }
    }
    

export default Data;