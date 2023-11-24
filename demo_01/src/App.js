import './App.css';

const keywords = [
  'JavaScript',
  'Python',
  'C#',
  'Java',
];

function App() {
  const firstName = 'Luke';
  const user = {
    nickName: 'skywalker',
    hairColor: 'blond',
  };

  const getMessage = (message = `nothing`) => {
    return `My message is ${message}`;
  };

  const isLoggedIn = true;
  const isMobile = false;

  const generateJSXForHeader = () => {
    if (isMobile) {
      return (
        <div>Mobile Header</div>
      );
    } else {
      return (
        <div>Desktop Header</div>
      );
    }
  };

  return (
    <div className="app">
      <h1>Hello World</h1>
      <p>Hello, {firstName}</p>
      <p>Hello, {user.nickName}. Your hair color is {user.hairColor}.</p>
      <p>My message is {getMessage(`More peace no war`)}</p>
      <ul>
        {isLoggedIn ? <li>Sign Out</li> : <li>Sign In</li>}
      </ul>
      <div>{generateJSXForHeader()}</div>
      <ul>
        {keywords.map(keyword => <li>{keyword}</li>)}
      </ul>
    </div>
  );
}

export default App;
