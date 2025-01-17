﻿using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Contracts
{
    public interface IPremiumCalculator 
    {
        IEnumerable<Occupation> GetOccupationList();
        decimal CalculatePremium(PremiumCalculator premiumInfo);
    }
}
