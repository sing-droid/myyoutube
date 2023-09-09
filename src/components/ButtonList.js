import React from "react";
import Button from "./Button";

const ButtonList = () => {

    return(
        <div className="flex bg-gray-100">
            <Button name= "All"/>
            <Button name="Gaming" />
            <Button name= "Songs"/>
            <Button name= "Live"/>
            <Button name= "Movies"/>
            <Button name= "Cricket"/>
            <Button name= "News"/>
            <Button name= "Cooking"/>
            <Button name= "Tranding"/>
            <Button name= "Entertainment"/>
            <Button name= "watched"/>

</div>
    )
}

export default ButtonList;