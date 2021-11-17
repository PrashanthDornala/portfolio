import React, { Component } from 'react'
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              className="three columns main-col bgrid-quarters s-bgrid-thirds cf"
              id="portfolio-wrapper"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="portfolio-item-meta">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
