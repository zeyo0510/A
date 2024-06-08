((name) => {
  globalThis.A               = globalThis.A               || {};
  globalThis.A._Mathematics_ = globalThis.A._Mathematics_ || {};
  /************************************************/
  globalThis.A._Mathematics_._Elementary_ = class $
  {
    #_name_ = name;
    /************************************************/
    static _Addition_()
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
        if (i != 0)
        {
          retValue += n;
        }
      }
      /************************************************/
      return retValue;
    }
    /************************************************/
    static _Subtraction_()
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
        if (i != 0)
        {
          retValue -= n;
        }
      }
      /************************************************/
      return retValue;
    }
    /************************************************/
    static _Multiplication_()
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
        if (i != 0)
        {
          retValue *= n;
        }
      }
      /************************************************/
      return retValue;
    }
    /************************************************/
    static _Division_()
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
        if (i != 0)
        {
          retValue /= n;
        }
      }
      /************************************************/
      return retValue;
    }
  }
})('Mathematics-Elementary');