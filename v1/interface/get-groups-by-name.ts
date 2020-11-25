interface outputSchema {
  /**
   * @examples [1]
   */
  id: number;

  /**
   * @examples ["Testing"]
   */
  name: string;

  /**
   * @examples [true]
   */
  is_smart: boolean;

  /**
   * @examples [true]
   */
  is_notify_on_change: boolean;

  site: {
    /**
     * @examples [1]
     */
    id: number;
    /**
     * @examples ["None"]
     */
    name: string;
  };

  users: {
    /**
     * @examples [1]
     */
    id: number;
    /**
     * @examples ["Jhon"]
     */
    username: string;
    /**
     * @examples ["Jhon89"]
     */
    full_name: string;
    /**
     * @examples [123-1234-123]
     */
    phone_number: number;
    /**
     * @examples [""]
     */
    email_address: string;
  }[];
  /**
   * @examples [true]
   */
  action_success: boolean;
}
