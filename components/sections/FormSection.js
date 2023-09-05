import GenericContactForm from 'components/contact/GenericContactForm';

const FormSection = ({ desc }) => (
  <div className="md:col-span-1">
    <GenericContactForm desc={desc} />
  </div>
);

export default FormSection;
