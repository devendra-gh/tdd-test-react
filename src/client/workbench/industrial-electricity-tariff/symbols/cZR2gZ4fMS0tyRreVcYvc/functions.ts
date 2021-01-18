import {getContactDetails} from '../../sharedFunctions/utils';

export  function call_f1_onClick(props: any) {
	  return (value: any) => {
    const contactDetails = getContactDetails(
      !props.isContact,
      props.user,
      {
        contactName: props.contactForm.name,
        contactEmail: props.contactForm.email,
        contactNumber: props.contactForm.mobileNumber,
      },
      props.locale,
    );
    props.actions.contactForm.update({
      name: contactDetails.name,
      email: contactDetails.email,
      mobileNumber: contactDetails.phone,
    });

    props.actions.isContact.update(!props.isContact);
  };
}
export async function f2_onChange(props: any) {
}