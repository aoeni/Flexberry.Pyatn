﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Pyatn
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Информация бронирования.
    /// </summary>
    // *** Start programmer edit section *** (ИнфБрон CustomAttributes)

    // *** End programmer edit section *** (ИнфБрон CustomAttributes)
    [AutoAltered()]
    [Caption("Информация бронирования")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ИнфБронE", new string[] {
            "Пассажир as \'Пассажир\'",
            "Пассажир.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Пассажир.ФИО"})]
    [MasterViewDefineAttribute("ИнфБронE", "Пассажир", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    public class ИнфБрон : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Pyatn.Пассажир fПассажир;
        
        private IIS.Pyatn.Рейс fРейс;
        
        // *** Start programmer edit section *** (ИнфБрон CustomMembers)

        // *** End programmer edit section *** (ИнфБрон CustomMembers)

        
        /// <summary>
        /// Информация бронирования.
        /// </summary>
        // *** Start programmer edit section *** (ИнфБрон.Пассажир CustomAttributes)

        // *** End programmer edit section *** (ИнфБрон.Пассажир CustomAttributes)
        [PropertyStorage(new string[] {
                "Пассажир"})]
        [NotNull()]
        public virtual IIS.Pyatn.Пассажир Пассажир
        {
            get
            {
                // *** Start programmer edit section *** (ИнфБрон.Пассажир Get start)

                // *** End programmer edit section *** (ИнфБрон.Пассажир Get start)
                IIS.Pyatn.Пассажир result = this.fПассажир;
                // *** Start programmer edit section *** (ИнфБрон.Пассажир Get end)

                // *** End programmer edit section *** (ИнфБрон.Пассажир Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИнфБрон.Пассажир Set start)

                // *** End programmer edit section *** (ИнфБрон.Пассажир Set start)
                this.fПассажир = value;
                // *** Start programmer edit section *** (ИнфБрон.Пассажир Set end)

                // *** End programmer edit section *** (ИнфБрон.Пассажир Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Pyatn.Рейс.
        /// </summary>
        // *** Start programmer edit section *** (ИнфБрон.Рейс CustomAttributes)

        // *** End programmer edit section *** (ИнфБрон.Рейс CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Рейс"})]
        public virtual IIS.Pyatn.Рейс Рейс
        {
            get
            {
                // *** Start programmer edit section *** (ИнфБрон.Рейс Get start)

                // *** End programmer edit section *** (ИнфБрон.Рейс Get start)
                IIS.Pyatn.Рейс result = this.fРейс;
                // *** Start programmer edit section *** (ИнфБрон.Рейс Get end)

                // *** End programmer edit section *** (ИнфБрон.Рейс Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИнфБрон.Рейс Set start)

                // *** End programmer edit section *** (ИнфБрон.Рейс Set start)
                this.fРейс = value;
                // *** Start programmer edit section *** (ИнфБрон.Рейс Set end)

                // *** End programmer edit section *** (ИнфБрон.Рейс Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ИнфБронE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ИнфБронE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ИнфБронE", typeof(IIS.Pyatn.ИнфБрон));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ИнфБрон.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfИнфБрон CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfИнфБрон CustomAttributes)
    public class DetailArrayOfИнфБрон : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Pyatn.DetailArrayOfИнфБрон members)

        // *** End programmer edit section *** (IIS.Pyatn.DetailArrayOfИнфБрон members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ИнфБрон by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ИнфБрон.
        /// </summary>
        public DetailArrayOfИнфБрон(IIS.Pyatn.Рейс fРейс) : 
                base(typeof(ИнфБрон), ((ICSSoft.STORMNET.DataObject)(fРейс)))
        {
        }
        
        public IIS.Pyatn.ИнфБрон this[int index]
        {
            get
            {
                return ((IIS.Pyatn.ИнфБрон)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Pyatn.ИнфБрон dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
