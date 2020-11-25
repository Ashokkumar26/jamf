interface outputSchema {
  /**
   * @examples [1]
   */
  id: number;
  /**
   * @examples ["Teachers"]
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
  criteria: {
    /**
     * @examples ["Email Address"]
     */
    name: string;
    /**
     * @examples [0]
     */
    priority: number;
    /**
     * @examples ["and"]
     */
    and_or: string;
    /**
     * @examples ["like"]
     */
    search_type: string;
    /**
     * @examples ["company.com"]
     */
    value: string;
    /**
     * @examples [false]
     */
    opening_paren: boolean;
    /**
     * @examples [false]
     */
    closing_paren: boolean;
  }[];
  users: {
    /**
     * @examples [1]
     */
    id: number;
    /**
     * @examples [AHarrison]
     */
    username: string;
    /**
     * @examples ["Ashley Harrison"]
     */
    full_name: string;
    /**
     * @examples ["123-123-1234"]
     */
    phone_number: string;
    /**
     * @examples ["aharrison@company.com"]
     */
    email_address: string;
  }[];
}
