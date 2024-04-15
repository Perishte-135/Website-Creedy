import React, {useState, useEffect} from 'react';
import './accordion.css';


const Accordion = ({items, keepOthersOpen}) => {
  const [accordionItems, setAccordionItems] = useState(null);

  useEffect(() => {
    if (items) {
      setAccordionItems([
        ...items.map(item => ({
          ...item,
          toggled: false
        }))
      ])
    }
  }, [items])

  const handleAccordionToggle = (clickedItem) => {
    setAccordionItems([
      ...accordionItems.map((item) => {
        let toggled = item.toggled;
        if (clickedItem.id === item.id) {
          toggled = !item.toggled
        } else if (!keepOthersOpen) {
          toggled = false;
        }

        return {
          ...item,
          toggled
        }
      })
    ])
  }
  return (
    <div className="accordion_wrapper">
      {accordionItems?.map((listItem, key) => {
        return (
          <div className="question_block">
            <div className={`accordion ${listItem.toggled ? 'toggled' : ''}`} key={key}>
              <button className="toggle" onClick={() => handleAccordionToggle(listItem)}>
                <p>{listItem.label}</p>
                <div className="direction-indicator">
                  <i className="arrow">{listItem.toggled}</i>
                </div>
              </button>
              <div className="content-parent">
                <div className="content">{listItem.renderContent()}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export default Accordion;