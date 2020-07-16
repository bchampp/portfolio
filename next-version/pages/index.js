import Head from 'next/head'
import { Component } from 'react';
import $ from 'jquery';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';


export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  async getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: async function(data){
        await this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
    console.log("Test")
  }

  render() {
    console.log(this.state)
    return (
      <Head>
      <div className="App">
          <Header data={this.state.resumeData.main}/>
          <About data={this.state.resumeData.main}/>
          <Projects data={this.state.resumeData.portfolio}/>
          <Resume data={this.state.resumeData.resume}/>
          <Footer data={this.state.resumeData.main}/>
      </div>
      </Head>
    );
  }
}