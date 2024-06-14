((name) => {
  globalThis.A                 = globalThis.A                 || {};
  globalThis.A._TaiwanLottery_ = globalThis.A._TaiwanLottery_ || {};
  /************************************************/
  globalThis.A._TaiwanLottery_._Lottery_ = class $
  {
    #_period_ = undefined;
    #_date_   = undefined;
    #_number_ = undefined;
    /************************************************/
    constructor(_period_, _date_, _number_)
    {
      this.#_period_ = _period_;
      this.#_date_   = _date_  ;
      this.#_number_ = _number_;
    }
    /************************************************/
    get _Period_()
    {
      const retValue = this.#_period_;
      /************************************************/
      return retValue;
    }
    /************************************************/
    get _Date_()
    {
      const retValue = this.#_date_;
      /************************************************/
      return retValue;
    }
    /************************************************/
    get _Number_()
    {
      const retValue = this.#_number_;
      /************************************************/
      return retValue;
    }
    /************************************************/
    get _Meta_()
    {
      const retValue = {};
      /************************************************/
      retValue._period_ = this._Period_;
      retValue._date_   = this._Date_  ;
      retValue._number_ = this._Number_;
      /************************************************/
      return retValue;
    }
  }
})('TaiwanLottery-Lottery');