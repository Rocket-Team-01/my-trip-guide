import React, { useState } from "react";
import { Dropdown, FormControl, Button } from "react-bootstrap";
import categories from "../data/categories";
import '../css/CategoriesButton.css'
function CategoriesButton(props) {
  const [title, setTitle] = useState("Categories");

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      variant="danger"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
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
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value.toLowerCase())}
            value={value}
          />
          <ul>
            {React.Children.toArray(children).filter(
              (child) =>
         
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <Dropdown >
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu className='dropdown-category' as={CustomMenu}>
        {categories.map((item, index) => (
          <Dropdown.Item
            
            key={index}
            eventKey={item.cuisine_id}
            onSelect={() => {
              props.setCategoryName(item.cuisine_name);
              props.setCategoryID(item.cuisine_id);
              setTitle(item.cuisine_name);
            }}
          >
            {item.cuisine_name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default CategoriesButton;
