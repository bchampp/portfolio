import Head from 'next/head'
import { Component } from 'react';
import $ from 'jquery';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import { resumeData } from "../public/resumeData";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: resumeData,
    };
  }

  render() {
    return (
      <Head>
        <script data-name="BMC-Widget" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="brentchampion" data-description="" data-message="" data-color="#5F7FFF" data-position="right" data-x_margin="18" data-y_margin="18"></script>
        <div className="App">
          <Header data={this.state.resumeData.main} />
          <About data={this.state.resumeData.main} />
          <Projects data={this.state.resumeData.portfolio} />
          <Resume data={this.state.resumeData.resume} />
          <Footer data={this.state.resumeData.main} />
        </div>
      </Head>
    );
  }
}