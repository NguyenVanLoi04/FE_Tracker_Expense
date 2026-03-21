export function formatPhoneNumberVN(phoneNumber?: string) {
  console.log(phoneNumber);
  if (!phoneNumber) {
    return '';
  }

  // Remove any non-digit characters
  phoneNumber = phoneNumber.replace(/\D/g, '');

  if (phoneNumber.startsWith('0')) {
    // If starts with '0', replace with '+84'
    return '+84' + phoneNumber.slice(1);
  } else if (phoneNumber.startsWith('84')) {
    // If starts with '84', add '+' at the beginning
    return '+' + phoneNumber;
  }

  return phoneNumber; // Return unchanged if it doesn't match any pattern
}
export function formatPhoneNumberToLocal(phoneNumber?: string) {
  if (!phoneNumber) return '';
  return phoneNumber.replace(/^\+84/, '0');
}
