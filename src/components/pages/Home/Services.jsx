import React from "react";
import './styles/services.scss'
import SharedLink from '../../shared/SharedLink/SharedLink'
import {BsArrowRight} from 'react-icons/bs'
import SharedLink2 from "../../shared/SharedLink2/SharedLink2";

const Services = () => {
  return (
    <div className="services">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed ut perspiciatis
        unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
        nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
        amet, consectetur, adipisci velit, sed quia non numquam eius modi
        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
        autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
      {/* <SharedLink 
        to='/about' 
        link='Show more' 
        icon={<BsArrowRight />} 
      /> */}
      <SharedLink2 
        to='/about'
        text='Show More'
        icon={<BsArrowRight />}
      />
    </div>
  );
};

export default Services;
