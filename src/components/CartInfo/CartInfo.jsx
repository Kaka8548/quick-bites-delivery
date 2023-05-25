import {
  UserCont,
  UserInput,
  UserInputTitle,
  UserLabel,
} from './CartInfo.styled';

export const CartInfo = () => {
  return (
    <UserCont>
      <UserLabel>
        <UserInputTitle>Name:</UserInputTitle>
        <UserInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </UserLabel>
      <UserLabel>
        <UserInputTitle>Email:</UserInputTitle>
        <UserInput
          type="email"
          name="email"
          pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
          required
        />
      </UserLabel>
      <UserLabel>
        <UserInputTitle>Phone:</UserInputTitle>
        <UserInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />
      </UserLabel>
      <UserLabel>
        <UserInputTitle>Adress:</UserInputTitle>
        <UserInput
          type="email"
          name="email"
          pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
          required
        />
      </UserLabel>
    </UserCont>
  );
};
