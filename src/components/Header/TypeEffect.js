import React, {Component} from 'react';
import './TypeEffect.scss';

class TypeEffect extends Component {

  constructor(props) {
    super(props);
    this.qualities = ['Software Engineer', 'Designer', 'Voracious Reader', 'Lifelong learner'];
    this._isMounted = false;
    this.state = {
      index: 0,
      displayWord: '',
      isDeleting: false,
      typeSpeed: 300
    };
  }
  componentDidMount() {
    this._isMounted = true;
    this.print();
  }
  print = () => {
    if (this._isMounted) {
      let word = this.qualities[this.state.index];
      let positiveTxt;

      //Check if state is deleting
      if (this.state.isDeleting) {
        positiveTxt = word.substr(0, this.state.displayWord.length - 1);
        this.deleteLetter(positiveTxt, word);
      }
      else {
        positiveTxt= word.substr(0, this.state.displayWord.length + 1);
        this.addLetter(positiveTxt, word)
      }
      //Check if displayWord is complete, set isDeleting to true
      if (this.state.displayWord === word) {
        this.setState({...this.state, isDeleting: true});
      }
    }
  }
  addLetter = (halfTxt, fulWord) => {
    //Before adding letter, bring speed back to normal
    if (!this.state.displayWord) {
       this.setState({...this.state, typeSpeed: 300});
     }
    //If letters are all added, slow typing speed for 3s
    if (this.state.displayWord === fulWord.substr(0, fulWord.length -1)) {
      this.setState({...this.state, typeSpeed: 3000});
    }
    setTimeout((this.setState({displayWord: halfTxt}), this.print), this.state.typeSpeed);
  }

  deleteLetter = (halfTxt, fulWord) => {
    //When deleting, increase typing speed to 150ms to delete fast.
    if (this.state.displayWord === fulWord) {
       this.setState({...this.state, typeSpeed: 150});
     }
    //If displayWord is deleted, set isDeleting to false, increase index.
    if (!this.state.displayWord && this.state.index < this.qualities.length -1) {
      this.setState({...this.state, isDeleting: false, index: this.state.index + 1});
    }
    //Ensure index is not greater than length of qualities array.
    else if (!this.state.displayWord && this.state.index === this.qualities.length - 1) {
      this.setState({...this.state, index: 0, isDeleting: false});
    }
    setTimeout((this.setState({displayWord: halfTxt}), this.print), this.state.typeSpeed);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <span className='txt'>{this.state.displayWord}</span>
    );
  }
}

export default TypeEffect;
