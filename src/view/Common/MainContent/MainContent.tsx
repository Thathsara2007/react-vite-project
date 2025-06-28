// MainContent.tsx

import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart.tsx";
import {itemsList} from "../ModifyCart/ModifyCart.tsx";

export const MainContent = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>

                <Route path="/shopping-cart" element={<ShoppingCart itemsList={itemsList} />}/>
            </Routes>
        </div>
    );
};