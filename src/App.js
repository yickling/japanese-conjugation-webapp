import logo from './logo.svg';
import './App.css';
import './main';

function App() {
  return (
    <div id="toppest-container" className="App">
        <h1>Japanese Conjugation Practice</h1>
        <div id="top-container">
            <div id = "main-view">
                <div id="streak-container">
                        <div id="current-streak" className="streak">
                            <p>Current Streak</p>
                            <p id="current-streak-text">0</p>
                        </div>
                        <div id="max-streak" className="streak">
                            <p>Max Streak</p>
                            <p id="max-streak-text"> </p>
                        </div>
                    </div>
                    <div id="verb-container">
                        <div id="verb-box">
                            <p id="verb-text"></p>
                            <p id="translation"></p>
                            <p id="verb-type"></p>
                        </div>
                    </div>
                    <div id="conjugation-inquery-container">
                        <p id="conjugation-inquery-text"></p>
                    </div>
                    <div id="status-container">
                        <div id="status-box" className="display-none">
                            <p id="status-text">Correct</p>
                        </div>
                    </div>
                    <div id="input-container">
                        <div id="input-tooltip" className="tooltip">Invalid characters. Only Japanese kana and kanji are valid.</div>
                        <input id="main-text-input" type="text" maxLength="30" aria-label="Answer" />
                    </div>
                    <div id="settings-container">
                        <div id="settings-child-container">
                            <table id="settings-table" style={{ width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ width: '29%' }}></td>
                                        <td style={{ width: '42%' }} id="press-any-key-text" className="display-none">Press Enter/Return to continue</td>
                                        <td style={{ width: '29%' }}><button id="options-button">Options ⚙️</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
            <div id="options-view" className="display-none">
                <h2>Options</h2>
                <form id="options-form">
                    <div id="non-conjugation-settings">
                        <div className="option-row">
                            <div className="sub-option-row">
                                <input id="furigana-checkbox" type="checkbox" name="furigana" />
                                <label htmlFor="furigana-checkbox">Show furigana above kanji</label>
                            </div>
                            <div id="furigana-sub-options" className="option-row options-indent sub-options">
                                <table style={{ width: '100%' }}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input id="furigana-always-radio" type="radio" name="furiganaTiming" value="always" />
                                                <label htmlFor="furigana-always-radio">always</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input id="furigana-after-radio" type="radio" name="furiganaTiming" value="after" />
                                                <label htmlFor="furigana-after-radio">only after answering</label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="option-row">
                            <div className="sub-option-row">
                                <input id="translation-checkbox" type="checkbox" name="translation" />
                                <label htmlFor="translation-checkbox">Show English translations</label>
                            </div>
                            <div id="translation-sub-options" className="option-row options-indent sub-options">
                                <div className="sub-option-row"><input id="translation-always-radio" type="radio" name="translationTiming" value="always" /><label htmlFor="translation-always-radio">always</label></div>
                                <div className="sub-option-row"><input id="translation-after-radio" type="radio" name="translationTiming" value="after" /><label htmlFor="translation-after-radio">only after answering</label></div>
                            </div>
                        </div>
                        <div className="option-row">
                            <div className="sub-option-row">
                                <input id="emoji-checkbox" type="checkbox" name="emoji" />
                                <label htmlFor="emoji-checkbox">Show emojis above conjugation types</label>
                            </div>
                        </div>
                        <div className="option-row">
                            <div className="sub-option-row">
                                <input id="streak-checkbox" type="checkbox" name="streak" />
                                <label htmlFor="streak-checkbox">Show current/max streak</label>
                            </div>
                        </div>
                    </div>
                    <div id="conjugation-settings">
                        <hr />
                        <div id="verbs-h3-container">
                            <input id="verbs-checkbox" type="checkbox" name="verb" /><label htmlFor="verbs-checkbox"><h3>Verbs</h3></label>
                            <span id="top-must-choose" className="settings-error-text display-none">*Must choose at least 1 option from this category</span>
                        </div>
                        <div className="options-indent" id="verb-options-container">
                            <table style={{ width: '100%' }} className="options-group">
                                <tbody>
                                    <tr>
                                        <td>
                                            <input id="verbu-checkbox" type="checkbox" name="verbu" />
                                            <label htmlFor="verbu-checkbox">う-verbs</label>
                                        </td>
                                        <td rowSpan="3" className="settings-error-text display-none">*Must choose at least 1 option from this category</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input id="verbru-checkbox" type="checkbox" name="verbru" />
                                            <label htmlFor="verbru-checkbox">る-verbs</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input id="verbirregular-checkbox" type="checkbox" name="verbirregular" />
                                            <label htmlFor="verbirregular-checkbox">Irregular verbs</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr />
                            <div id="verb-conjugation-type-group" className="options-group">
                            <table style={{ width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <td><input id="verbpresent-checkbox" type="checkbox" name="verbpresent" className="verb-has-variations" /><label htmlFor="verbpresent-checkbox">Present tense</label></td>
                                        <td rowSpan="3"className="settings-error-text display-none">*Must choose at least 1 option from this category</td>
                                    </tr>
                                    <tr><td><input id="verbpast-checkbox" type="checkbox" name="verbpast" className="verb-has-variations" /><label htmlFor="verbpast-checkbox">Past tense</label></td></tr>
                                    <tr><td><input id="verbte-checkbox" type="checkbox" name="verbte" /><label htmlFor="verbte-checkbox">て-form</label></td></tr>
                                    <tr><td><input id="verbvolitional-checkbox" type="checkbox" name="verbvolitional" className="verb-has-politeness" /><label htmlFor="verbvolitional-checkbox">Volitional (~よう)</label></td></tr>
                                </tbody>
                            </table>
                            <div className="advanced-section">
                                <div id="advanced-text">ADVANCED</div>
                                <div className="advanced-option"><input id="verbpassive-checkbox" type="checkbox" name="verbpassive" className="verb-has-variations" /><label htmlFor="verbpassive-checkbox">Passive (~られる)</label></div>
                                <div className="advanced-option"><input id="verbcausative-checkbox" type="checkbox" name="verbcausative" className="verb-has-variations" /><label htmlFor="verbcausative-checkbox">Causative (~させる)</label></div>
                                <div className="advanced-option"><input id="verbpotential-checkbox" type="checkbox" name="verbpotential" className="verb-has-variations" /><label htmlFor="verbpotential-checkbox">Potential (~られる/れる)</label></div>
                                <div className="advanced-option"><input id="verbimperative-checkbox" type="checkbox" name="verbimperative" /><label htmlFor="verbimperative-checkbox">Imperative (~ろ)</label></div>
                            </div>
                            </div>
                            <div id="verb-variations-container">
                                <div className="options-group">
                                    <hr />
                                    <table style={{ width: '100%' }}>
                                        <tbody>
                                            <tr>
                                                <td><input id="verbaffirmative-checkbox" type="checkbox" name="verbaffirmative" /><label htmlFor="verbaffirmative-checkbox">Affirmative</label></td>
                                                <td rowSpan="2"className="settings-error-text display-none">*Must choose at least 1 option from this category</td>
                                            </tr>
                                            <tr><td><input id="verbnegative-checkbox" type="checkbox" name="verbnegative" /><label htmlFor="verbnegative-checkbox">Negative</label></td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="verb-politeness-container" className="options-group">
                                    <hr />
                                    <table style={{ width: '100%' }}>
                                        <tbody>
                                            <tr>
                                                <td><input id="verbplain-checkbox" type="checkbox" name="verbplain" /><label htmlFor="verbplain-checkbox">Plain</label></td>
                                                <td rowSpan="2"className="settings-error-text display-none">*Must choose at least 1 option from this category</td>
                                            </tr>
                                            <tr><td><input id="verbpolite-checkbox" type="checkbox" name="verbpolite" /><label htmlFor="verbpolite-checkbox">Polite</label></td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div id="adjectives-h3-container">
                            <input id="adjectives-checkbox" type="checkbox" name="adjective" /><label htmlFor="adjectives-checkbox"><h3>Adjectives</h3></label>
                        </div>
                        <div className="options-indent" id="adjective-options-container">
                            <table style={{ width: '100%' }} className="options-group" id="adjective-type-group">
                                <tbody>
                                    <tr>
                                        <td><input id="adjectivei-checkbox" type="checkbox" name="adjectivei" /><label htmlFor="adjectivei-checkbox">い-adjectives</label></td>
                                        <td rowSpan="3"className="settings-error-text display-none">*Must choose at least 1 option from this category</td>
                                    </tr>
                                    <tr><td><input id="adjectivena-checkbox" type="checkbox" name="adjectivena" /><label htmlFor="adjectivena-checkbox">な-adjectives</label></td></tr>
                                    <tr><td><input id="adjectiveirregular-checkbox" type="checkbox" name="adjectiveirregular" /><label htmlFor="adjectiveirregular-checkbox">Irregular adjectives</label></td></tr>
                                </tbody>
                            </table>
                            <hr />
                            <table style={{ width: '100%' }} className="options-group" id="adjective-conjugation-type-group">
                                <tbody>
                                    <tr>
                                        <td><input id="adjectivepresent-checkbox" type="checkbox" name="adjectivepresent" className="adjective-has-variations" /><label htmlFor="adjectivepresent-checkbox">Present tense</label></td>
                                        <td rowSpan="3"className="settings-error-text display-none">*Must choose at least 1 option from this category</td>
                                    </tr>
                                    <tr><td><input id="adjectivepast-checkbox" type="checkbox" name="adjectivepast" className="adjective-has-variations" /><label htmlFor="adjectivepast-checkbox">Past tense</label></td></tr>
                                    <tr><td><input id="adjectiveadverb-checkbox" type="checkbox" name="adjectiveadverb" /><label htmlFor="adjectiveadverb-checkbox" />Adverb</td></tr>
                                </tbody>
                            </table>
                            <div id="adjective-variations-container">
                                <div className="options-group">
                                <hr />
                                <table style={{ width: '100%' }}>
                                    <tbody>
                                        <tr>
                                            <td><input id="adjectiveaffirmative-checkbox" type="checkbox" name="adjectiveaffirmative" /><label htmlFor="adjectiveaffirmative-checkbox">Affirmative</label></td>
                                            <td rowSpan="2"className="settings-error-text display-none">*Must choose at least 1 option from this category</td>
                                        </tr>
                                        <tr><td><input id="adjectivenegative-checkbox" type="checkbox" name="adjectivenegative" /><label htmlFor="adjectivenegative-checkbox">Negative</label></td></tr>
                                    </tbody>
                                </table>
                                </div>
                                <div className="options-group">
                                <hr />
                                <table style={{ width: '100%' }}>
                                    <tbody>
                                        <tr>
                                            <td><input id="adjectiveplain-checkbox" type="checkbox" name="adjectiveplain" /><label htmlFor="adjectiveplain-checkbox">Plain</label></td>
                                            <td rowSpan="2"className="settings-error-text display-none">*Must choose at least 1 option from this category</td>
                                        </tr>
                                        <tr><td><input id="adjectivepolite-checkbox" type="checkbox" name="adjectivepolite" /><label htmlFor="adjectivepolite-checkbox">Polite</label></td></tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="back-button-container">
                        <button type="submit" id="back-button">Back ↩</button>
                    </div>    
                </form>
            </div>
        </div>
        <div id="donation-section" className="display-none">
        <p className="footer-text">This app's <a href="https://github.com/yickling/japanese-conjugation-webapp" target="_blank">source code</a> is available to use under the GPL-3.0 license.</p>
            <p className="footer-text">Based on the original work from <a href="https://github.com/baileysnyder/japanese-conjugation" target="_blank">Bailey Snyder</a></p>
        </div>
    </div>
  );
}

export default App;