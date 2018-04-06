// Transcrypt'ed from Python, 2018-04-05 23:19:47
import {__envir__, __nest__, __init__, __proxy__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, assert, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, format, __jsUsePyNext__, __pyUseJsNext__, py_iter, py_next, __PyIterator__, __JsIterator__, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, BaseException, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, py_TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, divmod, complex, __conj__, __Terminal__, __terminal__, print, input} from './org.transcrypt.__runtime__.js';
var __name__ = 'data_structures';
export var run = function (autoTester) {
	var aList = list ([1, 2, 3, 'moon', 'stars']);
	autoTester.check (aList);
	aList.insert (3, 'sun');
	autoTester.check (aList);
	autoTester.check (aList.__getslice__ (2, 4, 1));
	autoTester.check (aList.__getslice__ (0, null, 1));
	autoTester.check (aList.__getslice__ (2, null, 1));
	autoTester.check (len (aList));
	aList.append ('milkyway');
	autoTester.check (aList);
	aList.extend (list (['m1', 'm31']));
	autoTester.check (aList);
	var anotherList = list (tuple (['a', 'b', 'c']));
	autoTester.check (anotherList);
	autoTester.check (__in__ ('b', anotherList));
	autoTester.check (__in__ ('d', anotherList));
	var aDict = dict ({1: 'plant', 'animal': 2});
	autoTester.check (aDict);
	autoTester.check (aDict [1], aDict ['animal']);
	var p = function () {
		return 3;
	};
	var q = 4;
	autoTester.check (dict ([[p (), 'three'], [q, 'four']]));
	var aTuple = tuple ([1, 2, 3, 4, 5]);
	autoTester.check (aTuple);
	autoTester.check (len (aTuple));
	var anotherTuple = tuple ([1]);
	autoTester.check (anotherTuple);
	var aSet = new set ([1, 2, 2, 3]);
	autoTester.check (aSet);
	autoTester.check (len (aSet));
	autoTester.check (__in__ (2, aSet));
	autoTester.check (__in__ (4, aSet));
	aSet.py_clear ();
	autoTester.check (aSet);
	var anotherSet = set (tuple ([4, 5, 5, 6]));
	autoTester.check (anotherSet);
	var emptySet = set ();
	autoTester.check (emptySet);
	autoTester.check (len (emptySet));
	var aString = 'c_cis_d_dis_e_f_fis_g_gis_a_ais_b_c';
	autoTester.check (__in__ ('cis', aString));
	autoTester.check (__in__ ('g', aString));
	autoTester.check (__in__ ('bes', aString));
	autoTester.check (__in__ ('z', aString));
};

//# sourceMappingURL=data_structures.map