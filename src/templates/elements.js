import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';
import { Link } from '../utils';

/* eslint-disable */

export default class Elements extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <section id="four" className="wrapper">
                    <div className="inner">
                        <header className="major">
                            <h2>{_.get(this.props, 'pageContext.frontmatter.title')}</h2>
                        </header>
                        <section>
                            <h4>Please provide us with zip codes for pick up and delivery</h4>
                            <form method="post" action="#">
                                <div className="row gtr-uniform">
                                    <div className="col-6 col-12-xsmall">
                                        <input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
                                    </div>
                                    <div className="col-6 col-12-xsmall">
                                        <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
                                    </div>
                                    <div className="col-12">
                                        <select name="demo-category" id="demo-category">
                                            <option value="">- Category -</option>
                                            <option value="1">Quote</option>
                                            <option value="1">Administration</option>
                                            <option value="1">Human Resources</option>
                                        </select>
                                    </div>
                                    <div className="col-4 col-12-small">
                                        <input type="radio" id="demo-priority-low" name="demo-priority" checked />
                                        <label htmlFor="demo-priority-low">Low</label>
                                    </div>
                                    <div className="col-4 col-12-small">
                                        <input type="radio" id="demo-priority-normal" name="demo-priority" />
                                        <label htmlFor="demo-priority-normal">Normal</label>
                                    </div>
                                    <div className="col-4 col-12-small">
                                        <input type="radio" id="demo-priority-high" name="demo-priority" />
                                        <label htmlFor="demo-priority-high">High</label>
                                    </div>
                                    <div className="col-6 col-12-small">
                                        <input type="checkbox" id="demo-copy" name="demo-copy" />
                                        <label htmlFor="demo-copy">Email me a copy</label>
                                    </div>
                                    <div className="col-6 col-12-small">
                                        <input type="checkbox" id="demo-human" name="demo-human" checked />
                                        <label htmlFor="demo-human">Not a robot</label>
                                    </div>
                                    <div className="col-12">
                                        <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6" />
                                    </div>
                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><input type="submit" value="Send Message" className="primary" /></li>
                                            <li><input type="reset" value="Reset" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </section>
            </Layout>
        );
    }
}
