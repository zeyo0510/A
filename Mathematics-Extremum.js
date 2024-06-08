((name) => {
  globalThis.A               = globalThis.A               || {};
  globalThis.A._Mathematics_ = globalThis.A._Mathematics_ || {};
  /************************************************/
  globalThis.A._Mathematics_._Extremum_ = class $
  {
    #_name_ = name;
    /************************************************/
    static _Maximum_()
    {
      let retValue = undefined;
      /************************************************/
      for (let i = 0; i < arguments.length; i++)
      {
        const n = arguments[i];
        /************************************************/
        if (i == 0)
        {
          retValue = n;
        }
        /************************************************/
        if (i >= 0)
        {
          retValue = (n > retValue) ? n : retValue; 
        }
      }
      /************************************************/
      return retValue;
    }
    /************************************************/
    static _Minimum_()
    {
      let retValue = undefined;
      /************************************************/
      for (let i = 0; i < arguments.length; i++)
      {
        const n = arguments[i];
        /************************************************/
        if (i == 0)
        {
          retValue = n;
        }
        /************************************************/
        if (i >= 0)
        {
          retValue = (n < retValue) ? n : retValue; 
        }
      }
      /************************************************/
      return retValue;
    }
  }
})('Mathematics-Extremum');