import { CustomForm } from '../../../models/internal/Form/FormData.model';
import FormDataValidator from '../../../models/internal/Form/FormDataValidators.model';
import { CustomTable } from '../../../models/internal/Table/TableData.model';
import Button from '../../atoms/button/button';
import Icon from '../../atoms/icons/icon';
import Text from '../../atoms/text/text';
import Tooltip from '../../atoms/tooltip/tooltip';
import Card from '../../molecules/card/card';
import Form from '../../molecules/form/form';
import Table from '../../molecules/table/table';
import SCContactUs from './contactUs.style';

function ContactUs() {
  const printSubmit = (e: any) => {
    console.log('input', e);
  };

  const tableData: CustomTable = {
    tableHeaders: [
      {
        name: 'id',
        options: {
          hideLessThan: 700,
        },
      },
      {
        name: 'name',
        options: {
          hideLessThan: 700,
        },
      },
      { name: 'subname' },
      { name: 'tlf' },
      {
        name: 'action',
        options: {
          position: 'right',
        },
      },
    ],
    tableRows: [
      {
        row: [
          {
            value: 0,
          },
          {
            value: 'tony',
          },
          {
            value: 'sanjuan',
          },
          {
            value: 627239365,
          },
          {
            value: <Button text="epa" />,
          },
        ],
      },
      {
        row: [
          {
            value: 1,
          },
          {
            value: 'name',
          },
          {
            value: 'subname',
          },
          {
            value: 2424242424,
          },
          {
            value: <Button text="epa2" />,
          },
        ],
      },
    ],
  };
  const formData: CustomForm = {
    formName: 'first form',
    formInputs: [
      {
        id: 0,
        name: 'email',
        value: '',
        validators: [
          FormDataValidator.Required,
          FormDataValidator.Email,
        ],
      },
      {
        id: 1,
        name: 'edad',
        value: 0,
        validators: [
          FormDataValidator.GreaterThanZero,
        ],
      },
    ],
  };
  return (
    <SCContactUs>
      <div className="contactUs_CardContainer">
        <Card
          title="Form"
          icon="apple"
        >
          <Form
            data={formData}
            onSubmitHandler={printSubmit}
            hideSubmitButton={false}
          />
        </Card>
      </div>

      <div className="contactUs_ButtonContainer">
        <p>by size</p>
        <Button size="big" text="big" onClick={printSubmit} />
        <Button size="mid" text="mid" onClick={printSubmit} />
        <Button size="small" text="small" onClick={printSubmit} />
      </div>
      <div className="contactUs_ButtonContainer">
        <p>with icon</p>
        <Button color="accent" text="text" icon="alarm" onClick={printSubmit} />
      </div>
      <div className="contactUs_ButtonContainer">
        <p>by color</p>
        <Button color="accent" text="primary color" onClick={printSubmit} />
        <Button color="secondary" text="secondary color" onClick={printSubmit} />
        <Button color="accent" text="accent" onClick={printSubmit} />
      </div>

      <div className="contactUs_ButtonContainer">
        <p>top forced tooltip</p>
        <Tooltip
          tooltip={<Text data="top tooltip" />}
          position="right"
          forceDisplay
        >
          <Button color="primary" text="primary color" onClick={printSubmit} />
        </Tooltip>
      </div>
      <div className="contactUs_ButtonContainer">
        <p>top tooltip</p>
        <Tooltip
          tooltip={<Text data="top tooltip" />}
          position="top"

        >
          <Button color="primary" text="primary color" onClick={printSubmit} />
        </Tooltip>
      </div>

      <div className="contactUs_ButtonContainer">
        <p>right tooltip</p>
        <Tooltip
          tooltip={<Text data="right tooltip" />}
          position="right"
        >
          <Button color="primary" text="primary color" onClick={printSubmit} />
        </Tooltip>
      </div>
      <div className="contactUs_ButtonContainer">
        <p>left tooltip</p>
        <Tooltip
          tooltip={<Text data="left tooltip" />}
          position="left"

        >
          <Button color="primary" text="primary color" onClick={printSubmit} />
        </Tooltip>
      </div>

      <div className="contactUs_ButtonContainer">
        <p>bottom tooltip</p>
        <Tooltip
          tooltip={<Text data="bottom tooltip" />}
          position="bottom"
        >
          <Button color="primary" text="primary color" onClick={printSubmit} />
        </Tooltip>
      </div>

      <div className="contactUs_CardContainer">
        <Card
          title="Icons"
          icon="apple"
        >
          <>
            <Icon icon="alarm" size="small" color="primary" />
            <Icon icon="apple" size="mid" color="secondary" />
            <Icon icon="award" size="big" color="accent" />

          </>
        </Card>

      </div>
      <div className="contactUs_CardContainer">
        <Card
          title="Table"
          icon="apple"
        >
          <Table data={tableData} />
        </Card>
      </div>

    </SCContactUs>
  );
}

export default ContactUs;
