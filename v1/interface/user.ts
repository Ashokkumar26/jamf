export interface outputSchema {
  /**
   * @examples ["046640c9-167c-4e70-99c1-751976ae0951"]
   */
  id: string;
  /**
   * @examples ["John"]
   */
  firstName: string;
  /**
   * @examples ["William"]
   */
  middleName: string;
  /**
   * @example ["Doe"]
   */
  lastName: string;
  /**
   * @example ["John Doe"]
   */
  fullName: string;
  /**
   * @example ["johny"]
   */
  username: string;
  /**
   * @example [""]
   */
  email: string;
  /**
   * @example ["1976-05-30"]
   */
  birthDate: string;
  /**
   * @example ["303-555-1234s"]
   */
  mobilePhone: string;
  /**
   * @example ["salted-sha256"]
   */
  encryptionScheme: string;

  /**
   * @example ["https://65.media.tumblr.com/tumblr_l7dbl0MHbU1qz50x3o1_500.png"]
   */
  imageUrl: string;
  /**
   * @example ["e3306678-a53a-4964-9040-1c96f36dda72"]
   */
  connectorId: string;
  /**
   * @example ["1571786483322"]
   */
  expiry: string;
  /**
   * @example ["1606106594270"]
   */
  insertInstant: string;
  /**
   * @example ["1606106594270"]
   */
  lastLoginInstant: string;
  /**
   * @example ["1606106594270"]
   */
  lastUpdateInstant: string;
  /**
   * @example [false]
   */
  passwordChangeRequired: boolean;
  /**
   * @example ["1606106594284"]
   */
  passwordLastUpdateInstant: string;
  /**
   * @example ["7f23c79d-7549-0412-e101-fc6bfbd08c99"]
   */
  tenantId: string;
  /**
   * @example ["America/Denver"]
   */
  timezone: string;
  /**
   * @example ["None"]
   */
  twoFactorDelivery: string;
  /**
   * @example [false]
   */
  twoFactorEnabled: boolean;
  /**
   * @example ["ACTIVE"]
   */
  usernameStatus: string;
  /**
   * @example [true]
   */
  verified: boolean;
  /**
   * @example [true]
   */
  active: boolean;
  /**
   * @examples [true]
   */
  action_success: boolean;
}
