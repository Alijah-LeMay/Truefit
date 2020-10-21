import React from 'react';
import Radium from 'radium';
import MyButton from '../utils/Button';
import Tr from '../utils/Tr';
import Td from '../utils/Td';
import { elipsesText } from '../utils/functions';

const DetailList = ({ content, buttons, editLoc }) => {
  let contentArray = [];
  for (let key in content) {
    contentArray.push(content[key]);
  }
  let rStyle = {
    detailContainer: {
      display: 'flex',
      backgroundColor: '#f2f2f2',
      justifyContent: 'center',
      width: '100%',
    },
    detailElement: {
      padding: '5px 6px',
      border: '1px solid #ccc',
      overFlow: 'hidden',
      maxWidth: '250px',
    },
  };
  return (
    <Tr style={rStyle.detailContainer} key='r1'>
      {contentArray.map((element, index) => {
        if (!element || element === undefined) {
          element = '';
        }
        return (
          <Td style={rStyle.detailElement} key={index}>
            {elipsesText(element, 10)}
          </Td>
        );
      })}
      {buttons.map((button, index) => {
        if (button.variant === 'func') {
          return (
            <Td key={index}>
              <MyButton
                variant={button.variant}
                content={button.content}
                to={button.to}
              />
            </Td>
          );
        } else {
          return (
            <Td key={index}>
              <MyButton
                variant={button.variant}
                content={button.content}
                to={`/admin/${editLoc}/${content._id}/edit`}
              />
            </Td>
          );
        }
      })}
    </Tr>
  );
};

export default Radium(DetailList);
