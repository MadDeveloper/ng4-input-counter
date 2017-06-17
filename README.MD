# ng4-input-counter

## Normal

![](http://g.recordit.co/o3Y0gTx0Op.gif)

## Maxlength

![](http://g.recordit.co/KAVkmjZBxO.gif)

## Minlength

![](http://g.recordit.co/Ww5C5R8B4Z.gif)

## Both

![](http://g.recordit.co/5XUR8OArww.gif)

## Installation

To install the library, run:

```bash
$ npm install ng4-input-counter --save
```

and then from your Angular `AppModule`

```typescript
import { InputCounterModule } from 'ng4-input-counter';

@NgModule({
  ...
  imports: [
    ...
    InputCounterModule.forRoot()
  ],
  ...
})
export class AppModule { }
```

## How to use

```xml
<form>
  <input-counter 
    type="email" 
    placeholder="Email address" 
    required="true"
    [(ngModel)]="email">
  </input-counter>
</form>
```

## Input properties

In order to make it more comfortable and compliant as a native input, the most used attributes have been set as input properties.

Property | Type | Default value
- |:-: | -:
ngModel | any | N/A
id | string | N/A
type | string | `'text'`
className | string | N/A
name | string | N/A
placeholder | string | `'text'`
maxlength | number | N/A
minlength | number | N/A
pattern | string | N/A
disabled | boolean | `false`
required | boolean | `false`
readonly | boolean | `false`
focus | Function | `noop`
blur | Function | `noop`

Note the special case for the `className` property which cannot be set to the native `class` property because the css classes will also be applied to the `<input-counter>` element, and behind the hoot, we cannot use a `class` property like it's a reserved keyword in JavaScript and TypeScript. So the React way has been used for this case.

## License

MIT © [maddeveloper](mailto:sergent.julien@icloud.com)