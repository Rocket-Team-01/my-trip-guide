import React, { useState } from "react";
import { Dropdown, FormControl, Button } from "react-bootstrap";
import categories from "../data/categories";
import "../css/CategoriesButton.css";
import { LanguageContext } from "../context/LanguageContext";

// import {categories} from '../../public/locales/tr/translation.json'
function CategoriesButton(props) {
  const languageContextAPI = React.useContext(LanguageContext);

  const [title, setTitle] = useState();

  React.useEffect(() => {
    setTitle(languageContextAPI.t("search.2"));
  }, [languageContextAPI]);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      className='category-button category-round '
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <span className='category-item'>
      {children}
      </span>
     
      &#x25bc;
    </Button>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
  
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
         
        </div>
      );
    }
  );

  return (
    <Dropdown >
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"   >
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-category " as={CustomMenu}>
        {categories.map((item, index) => (
          <Dropdown.Item
            key={index}
            className=''
            eventKey={item.id}
            onSelect={() => {
              props.setCategoryName(item.name);
              props.setCategoryID(item.id);
              setTitle(languageContextAPI.t(`categories.${index}.name`));
            }}
          >
            <span className='pr-3'>
            {item.icon} 
            </span>
            {languageContextAPI.t(`categories.${index}.name`)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default CategoriesButton;
