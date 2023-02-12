interface User {
  userName: string;
  password: string;
}

const userName = document.getElementById("userName");
const password = document.getElementById("password");

let obj: User = {
  userName: "",
  password: "",
};

const changeObjectValues = (e: Event): void => {
  const target = e.target as Element;
  obj = { ...obj, [target.id]: (target as unknown as { value: string }).value };
  console.log(`${JSON.stringify(obj)}`);
};

userName?.addEventListener("change", changeObjectValues);
password?.addEventListener("change", changeObjectValues);

const submit = document.getElementById("submit");
const stringify = JSON.stringify(obj);

const userPas = async (obj: User): Promise<string> => {
  //   return new Promise<string>((resolve, reject) => {
  //     if (obj) {
  //       resolve(JSON.stringify(obj));
  //     } else {
  //       reject(Error("It doesn't work!"));
  //     }
  //   });

  try {
    return JSON.stringify(obj);
  } catch {
    throw new Error('oops !!')
    // return "It doesn't work!";
  }

  // return ''
};

const clickToSubmit = async () => {
  try {
    const res = await userPas(obj);
    const parsed = JSON.parse(res) as typeof obj;
    console.log(parsed);
  } catch (error) {
    console.log(error, "error");
  }
};

submit?.addEventListener("click", clickToSubmit);
