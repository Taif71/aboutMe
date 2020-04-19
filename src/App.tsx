import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

import {
    about,
    help,
    contact,
    interests,
    publications,
    learning,
    takeTo,
} from './utils';

class App extends Component<{}, {}> {
    render() {
        return (
            <div className="terminal"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <Terminal
                    color='white'
                    backgroundColor='blue'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "1.8em" }}
                    prompt='yellow'
                    promptSymbol='$'
                    allowTabs={false}
                    commands={{
                        'help': () => help(),
                        'about': () => about(),
                        'interests': () => interests(),
                        'publications': () => publications(),
                        'learning': () => learning(),
                        'contact': () => contact(),
                        'blog': () => takeTo('blog'),
                        'medium': () => takeTo('medium'),
                        'photography': () => takeTo('photography'),
                        'github': () => takeTo('github'),
                    }}
                    msg={
                        'Welcome to my portfolio site. My name is Mohammad Tasneemul Alam Bakshi.\n' +
                        '\n❓Type help (and press enter or return) to get started!\n'+
                        '❓You can also click on the green dot on top to maximize the console.\n' +
                        `⏱${new Date()}`
                    }
                />
            </div>
        );
    }
}

export default App;
