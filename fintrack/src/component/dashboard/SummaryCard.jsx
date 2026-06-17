import React from 'react'

const SummaryCard = ({ variant, label, amount, text, subtext }) => {
  console.log({
    variant,
    label,
    amount,
    text,
    subtext
  });
  const percentage =
  subtext === "profit"
    ? "+8%"
    : subtext === "loss"
    ? "-10%"
    : "";
  const cardStyles = {
    accent: 'bg-amber-300',
    dark: 'bg-slate-800',
  }
  const labelStyles = {
    accent: 'text-indigo-200',
    dark: 'text-slate-900',
  }

  const styles = {
    accent: 'text-indigo-300',
    dark: 'text-slate-600',
  }
  const subStyles = {
    profit: 'bg-green-200',
    loss: 'bg-red-400'
  }
  return (

    <>

      <div className={`${cardStyles[variant]} rounded-2xl flex flex-col justify-center items-center gap-2 p-1.5 h-45 w-95`}>
        <div className={`${(variant === "accent" ? labelStyles["dark"] : labelStyles["accent"])} text-xl`}>
          {label}
        </div>
        <div className={`${variant === "accent" ? styles["dark"] : styles["accent"]} text-2xl`}>₹{amount}</div>
        <div className='flex flex-row gap-3'>
          <div className={`${variant === "accent" ? styles["dark"] : styles["accent"]} text-xl`}>{text}</div>
          <div className={`${subtext ? subStyles[subtext] : ""} rounded-xl w-13`}>{percentage}</div>
        </div>
      </div>
    </>
  )
}

export default SummaryCard
